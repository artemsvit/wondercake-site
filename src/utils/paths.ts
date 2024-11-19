export function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/wondercake-site' : '';
  return `${basePath}${path}`;
}
