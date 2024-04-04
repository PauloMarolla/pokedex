import { Container } from './styles';

interface CardInformationProps {
  value?: number;
  label?: string;
}

export function CardInformation({ label, value }: CardInformationProps) {
  return (
    <Container>
      <strong>{value}</strong>
      <span>{label}</span>
    </Container>
  );
}
