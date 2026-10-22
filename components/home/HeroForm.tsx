import BookingForm from "../forms/BookingForm";
export default function HeroForm() {
  return (
    <div className="container-x relative z-20 -mt-28">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white p-4 shadow-xl sm:p-5">
        <BookingForm layout="hero" submitLabel="SUBMIT" idPrefix="hero" />
      </div>
    </div>
  );
}
