import Button from "@/components/Button";

interface TripDetailProps {
  params: { id: string };
}

export default function TripDetail({ params }: TripDetailProps) {
  return (
    <div>
      <p>TripDetail</p>
      <Button />
    </div>
  );
}
