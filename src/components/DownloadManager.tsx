import { saveAs } from "file-saver";
import JSZip from "jszip";
import { useCallback } from "react";
import styled from "styled-components";

import CloudDownload from "~/assets/cloud-download-outline.svg";
import Deselect from "~/assets/deselect.svg";
import SelectAll from "~/assets/select-all.svg";
import { usePets } from "~/services/PetsStore";

import { AccentButton, Button } from "./Button";
import { SVGImage } from "./SVGImage";

const Container = styled.div`
  align-self: end;
  display: flex;
  flex-shrink: 1;
  gap: 0.5rem;
`;

type Props = {
  selected: number[];
  onSelectAll: () => void;
  onClearSelection: () => void;
};

export function DownloadManager({
  selected,
  onSelectAll,
  onClearSelection,
}: Props) {
  const { data } = usePets();

  const onDownloadImages = useCallback(async () => {
    const zip = new JSZip();

    try {
      // Go through each selected image and try to save it as a file which
      // we'll zip. If we fail on some of the images, those images will be
      // excluded from the final download.
      await Promise.allSettled(
        data
          .filter(({ id }) => selected.includes(id))
          .map(async ({ url }) => {
            const filename = url.split("/").at(-1)?.split("?")[0];
            if (!filename) throw new Error("Failed to find filename.");
            const res = await fetch(url);
            if (!res.ok) throw new Error("Image not found.");
            const data = await res.blob();
            zip.file(filename, data);
          }),
      );
      // Download the zipped folder.
      const fileContent = await zip.generateAsync({ type: "blob" });
      saveAs(fileContent, "pet-images.zip");
    } catch {
      console.log("Failed to download images.");
    }

    onClearSelection();
  }, [data, onClearSelection, selected]);

  return (
    <Container>
      <Button aria-label="Select all images." onClick={onSelectAll}>
        <SVGImage aria-hidden src={SelectAll} />
      </Button>
      <Button
        aria-label="Clear image selection."
        onClick={onClearSelection}
        disabled={selected.length === 0}
      >
        <SVGImage aria-hidden src={Deselect} />
      </Button>
      <AccentButton
        aria-label={`Download ${selected.length} images.`}
        onClick={onDownloadImages}
        disabled={selected.length === 0}
      >
        <SVGImage aria-hidden src={CloudDownload} />
      </AccentButton>
    </Container>
  );
}
