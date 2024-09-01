const Tag = ({ tagName }) => {
  return (
    <span
      key={tagName}
      className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-800"
    >
      {tagName}
    </span>
  );
};

export default Tag;
