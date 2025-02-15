"use client";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (params) => {
    const toastId = toast.loading("Sending your message...");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        params,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          limitRate: {
            throttle: 10000, // 5 seconds
          },
        }
      )
      .then(
        () => {
          toast.success(
            "Message sent successfully! I'll get back to you soon ",
            {
              id: toastId,
            }
          );
        },
        (error) => {
          toast.error("Failed to send message!", {
            id: toastId,
          });
        }
      );
  };

  const onSubmit = (data) => {
    const templateParams = {
      to_name: "Mannu",
      from_name: data.Name,
      reply_to: data.Email,
      message: data.Message,
    };
    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster richColors={true} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
      max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <input
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          type="text"
          placeholder="Name"
          {...register("Name", {
            required: "This field is required!",
            minLength: {
              value: 3,
              message: "This field must be at least 3 characters long",
            },
          })}
        />
        {errors.Name && (
          <span className="inline-block self-start text-accent">
            {errors.Name.message}
          </span>
        )}
        <input
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          type="email"
          placeholder="Email"
          {...register("Email", { required: "This field is required!" })}
        />
        {errors.Email && (
          <span className="inline-block self-start text-accent">
            {errors.Email.message}
          </span>
        )}
        <textarea
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          placeholder="Message"
          {...register("Message", {
            required: "This field is required!",
            maxLength: {
              value: 500,
              message: "This field must be at most 500 characters long",
            },
            minLength: {
              value: 50,
              message: "This field must be at least 50 characters long",
            },
          })}
        />
        {errors.Message && (
          <span className="inline-block self-start text-accent">
            {errors.Message.message}
          </span>
        )}

        <input
          value="Cast your Message"
          className="px-10 py-4 rounded-md shadow-lg bg-background border borer-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize"
          type="submit"
        />
      </form>
    </>
  );
}
