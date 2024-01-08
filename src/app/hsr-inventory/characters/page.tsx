"use client";

import React, { useEffect, useState } from "react";
import Characters from "components/starrail/Characters";
import { useSearchParams } from "next/navigation";
import CharacterDetails from "components/starrail/CharacterDetails";

export default function CharactersPage() {
  const [character, setCharacter] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const selected = searchParams?.get("selected");
    if (selected) {
      setCharacter(selected);
    } else {
      setCharacter(null);
    }
  }, [searchParams]);

  return (
    <>
      {character ? <CharacterDetails characterKey={character} /> : null}
      <Characters />
    </>
  );
}
