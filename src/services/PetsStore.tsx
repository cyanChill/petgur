import { createContext, useContext, useEffect, useState } from "react";

export type Pet = {
  title: string;
  description: string;
  url: string;
  created: string;
};

const ENDPOINT = "https://eulerity-hackathon.appspot.com/pets";

type PetsStore = {
  data: Pet[];
  isLoading: boolean;
  error?: Error;
};

const PetsStoreContext = createContext<PetsStore>(null as never);

export function PetsStoreProvider(props: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Pet[]>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(ENDPOINT);
      if (!res.ok) {
        setError(new Error("Failed to fetch pets."));
      } else {
        const petsData: Pet[] = await res.json();
        setData(petsData.sort((a, b) => a.title.localeCompare(b.title)));
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <PetsStoreContext.Provider value={{ data, isLoading, error }}>
      {props.children}
    </PetsStoreContext.Provider>
  );
}

export function usePets() {
  const store = useContext(PetsStoreContext);
  if (!store) {
    throw new Error("usePets must be called within a PetsStoreProvider.");
  }
  return store;
}
