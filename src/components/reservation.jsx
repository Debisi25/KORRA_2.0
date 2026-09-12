function Form() {
  return (
    <>
      <div className=" p-1 py-35 max-w-120 mx-auto flex flex-col gap-6 min-h-screen ">
        {" "}
        <h2 className="font-display text-white text-[36px]">
          Make a reservation
        </h2>
        <p className="font-body text-base text-white/85 mb-4">
          A table by the window, or wherever the evening takes you.
        </p>
        <form
          id="form"
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-3"
        >
          <label htmlFor="date">
            Date: <input type="date" name="date" id="date" />
          </label>
          <label htmlFor="time">
            Time: <input type="time" name="time" id="time" />
          </label>
          <label htmlFor="guests">
            Guests:{" "}
            <input
              type="number"
              name="guests"
              id="guests"
              placeholder="number of guests"
            />
          </label>
          <label htmlFor="name">
            name:{" "}
            <input type="text" name="name" id="name" placeholder="John Doe" />
          </label>
          <label htmlFor="email">
            Email:{" "}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Korra@email.com"
            />
          </label>
          <label htmlFor="phone">
            Phone:{" "}
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="+2341234567891"
            />
          </label>
          <label
            htmlFor="specialRequest"
            className="sm:col-span-3 col-span-1 xs:col-span-2 flex items-center justify-around mt-7"
          >
            Special Request:
            <textarea
              name="specialRequest"
              id="specialRequest"
              cols="30"
              rows="2"
              className="w-[97%] mx-auto"
            ></textarea>
          </label>
          <button
            type="submit"
            className="sm:col-span-3 justify-self-end sm:mr-4 col-span-1 xs:col-span-2 bg-korra-green text-white px-6 py-3 hover:bg-deep-green transition-colors duration-150 font-body text-sm font-medium uppercase tracking-widest "
          >
            Book a table →
          </button>
        </form>
      </div>
    </>
  );
}
export default Form;
