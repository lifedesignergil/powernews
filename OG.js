return res.json({});
ogs({ url: url }, function(err, og_result) { // eslint-disable-line
 summary.summarize(url, function(tldr_result) {
  var response = {
  };
  if (og_result && og_result.data) {
   if (og_result.data.ogTitle) {
    response.title = og_result.data.ogTitle;
   if (og_result.data.ogDescription) {
    response.description = og_result.data.ogDescription;
   if (og_result.data.ogImage && og_result.data.ogImage.url) {
    response.image = og_result.data.ogImage.url;
   if (og_result.data.twitterImage && og_result.data.twitterImage.url) {
    response.thumbnail = og_result.data.twitterImage.url;
