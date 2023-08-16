import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const { mutate, isLoading, isError } = useMutation(
    data => axios.post("https://email-service-three.vercel.app/mail", data),
    {
      onSuccess: data => {
        toast.success(data.data.message);
        reset();
      },
      onError: data => {
        toast.error(data.data.message);
      },
    }
  );

  if (isError) {
    toast.error("unable to send email!");
  }

  function onValid(data) {
    mutate(data);
  }

  return (
    <section
      className="max-w-full py-14 pb-36 min-h-screen px-4 bg-slate-50"
      id="contact"
    >
      <h1 className="uppercase text-center text-slate-800 mt-8 text-3xl sm:text-6xl lg:text-6xl font-bold ">
        <span className="text-lime-400">L</span>et's{" "}
        <span className="text-lime-400">T</span>alk
      </h1>
      <div className="flex mt-8 bg-slate-900 rounded-lg max-w-lg md:max-w-xl mx-auto px-4 py-6 text-white items-center justify-center">
        <form
          className="flex w-[80%] py-12 flex-col gap-4"
          onSubmit={handleSubmit(onValid)}
        >
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-2 rounded-lg w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              {...register("name")}
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              {...register("email")}
              className="block py-2.5 px-2 rounded-lg w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Email
            </label>
          </div>

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label>
          <textarea
            id="message"
            {...register("message")}
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Message..."
          ></textarea>
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-700 px-6 py-2 rounded-lg capitalize hover:bg-blue-800 hover:scale-105 disabled:cursor-not-allowed duration-300"
            >
              {isLoading ? `sending...` : "send message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
