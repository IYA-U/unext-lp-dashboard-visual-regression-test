export default async ({ domain }) => {
  const pageListRes = await fetch(`https://${domain}/vnhqf1t4/page_list_new`);
  const pageList = await pageListRes.json();
  return pageList;
};
