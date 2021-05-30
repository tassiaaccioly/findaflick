const encodeSearchTerm = (props) => {
  const { name, title, original_name, original_title } = props;
  const mediaTitle = name || title || original_name || original_title || "";

  console.log(mediaTitle?.toLowerCase().split(" ").join("%20"));

  return mediaTitle?.toLowerCase().split(" ").join("%20");
};

export default encodeSearchTerm;
