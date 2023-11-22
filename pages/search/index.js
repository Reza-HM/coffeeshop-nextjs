import Results from "@/components/templates/Search/Results";
import React from "react";

const Search = ({ data }) => {
  return <Results searchResult={data} />;
};

export async function getServerSideProps(context) {
  const { query } = context;
  const res = await fetch(`http://localhost:8000/menu`);
  const data = await res.json();

  const searchResult = data.filter(
    (item) =>
      item.type.toLowerCase().includes(query.q.toLowerCase()) ||
      item.title.toLowerCase().includes(query.q.toLowerCase())
  );

  return {
    props: {
      data: searchResult,
    },
  };
}

export default Search;
