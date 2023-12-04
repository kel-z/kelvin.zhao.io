/**
 * Format description with params.
 * @param desc The description.
 * @param params The params.
 * @returns The formatted description.
 */
export const formatDesc = (desc: string, params: string[]) => {
  let res = desc;
  params.forEach((param, index) => {
    res = res.replace(`{${index}}`, param);
  });
  return res;
};
