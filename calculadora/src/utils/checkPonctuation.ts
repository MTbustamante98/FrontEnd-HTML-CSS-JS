export default function checkPonctuation(
  dataValue: string | null,
  value: string | null,
  state: string | null,
): boolean {
  if (dataValue === value && state?.includes(value ?? "")) return true;

  return false;
}
