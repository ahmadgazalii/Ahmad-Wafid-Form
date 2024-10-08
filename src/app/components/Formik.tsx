import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  city,
  countries,
  gender,
  position,
  status,
  traveling,
  visatype,
} from "./formdata/Formdata";
import { Input } from "@/components/ui/input";
import { letter, sentence } from "./animations/Motion";
import Link from "next/link";

// Define the schema with validation for all fields, including password match check
const FormSchema = z
  .object({
    country: z.string().min(1, "Select Country."),
    city: z.string().min(1, "Select City."),
    travel: z.string().min(1, "Select travel Country."),
    Firstname: z.string().min(2, "Enter First name"),
    Lastname: z.string().min(2, "Enter Last name"),
    dob: z.string().min(1, "Date of birth is required."),
    gender: z.string().min(1, "Select Gender."),
    status: z.string().min(1, "Select status."),
    passportNumber: z.string().min(6, "Passport number is required."),
    confirmPassport: z.string().min(6, "Confirm Passport number is required."),
    passportIssueDate: z.string().min(1, "Passport Issue Date is required."),
    passportexpDate: z.string().min(1, "Passport Expiry Date is required."),
    passportIssuePlace: z.string().min(2, "Passport Issue Place is required."),
    Visatype: z.string().min(1, "Select Visa type."),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(11, "Phone number must be at least 11 digits"),
    nationalId: z.string().min(1, "National ID is required"),

    position: z.string().min(1, "Select position"),
  })
  .refine((data) => data.passportNumber === data.confirmPassport, {
    message: "Passport numbers do not match.",
    path: ["confirmPassport"], // Error message will appear in the confirm passport field
  });

export function Formik() {
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      country: "",
      city: "",
      travel: "",
      Firstname: "",
      Lastname: "",
      dob: "",
      gender: "",
      status: "",
      passportNumber: "",
      confirmPassport: "",
      passportIssueDate: "",
      passportexpDate: "",
      passportIssuePlace: "",
      Visatype: "",
      email: "",
      phoneNumber: "",
      nationalId: "",
      position: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setResult("Sending....");

    const formData = new FormData();
    formData.append("access_key", "75ca7f82-3e8b-412d-acec-b597e8cc0df9");
    formData.append("country", data.country);
    formData.append("city", data.city);
    formData.append("travel", data.travel);
    formData.append("Firstname", data.Firstname);
    formData.append("Lastname", data.Lastname);
    formData.append("dob", data.dob);
    formData.append("gender", data.gender);
    formData.append("status", data.status);
    formData.append("passportNumber", data.passportNumber);
    formData.append("passportIssueDate", data.passportIssueDate);
    formData.append("passportexpDate", data.passportexpDate);
    formData.append("passportIssuePlace", data.passportIssuePlace);
    formData.append("Visatype", data.Visatype);
    formData.append("email", data.email);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("nationalId", data.nationalId);
    formData.append("position ", data.position);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const responseData = await response.json();

      if (responseData.success) {
        setResult("Form Submitted Successfully");
        setIsSubmitted(true); // Set this to true to show "Continue" button
        form.reset();
      } else {
        setResult(responseData.message || "Submission failed");
      }
    } catch (error) {
      setResult("An error occurred during submission.");
    }
  };
  const line1 = "Book a medical examination appointment ";

  return (
    <div className="w-full">
      <div className="   max-w-[1100px] justify-items-end border p-6 sm:p-10 rounded-xl shadow-md shadow-black border-gray-300 items-center flex flex-col mx-auto text-black bg-[#ffff]">
        <div className="w-full">
          <motion.p variants={sentence} initial="hidden" animate="visible">
            {line1.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={letter}
                className="text-xl sm:text-4xl font-bold"
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
        </div>

        <Form {...form}>
          <form
            method="POST"
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
          >
            <p className="text-xl font-bold pt-8">Location</p>
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {/* Country Field */}
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">Country</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                        <SelectContent>
                          {countries.map((country, index) => (
                            <SelectItem key={index} value={country.value}>
                              {country.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {/* City Field */}
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">City</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a city" />
                        </SelectTrigger>
                        <SelectContent>
                          {city.map((city, index) => (
                            <SelectItem key={index} value={city.value}>
                              {city.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {/* Country Travel to */}
              <FormField
                control={form.control}
                name="travel"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">City</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select travel Country" />
                        </SelectTrigger>
                        <SelectContent>
                          {traveling.map((traveling, index) => (
                            <SelectItem key={index} value={traveling.value}>
                              {traveling.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>
            <p className="text-xl font-bold pt-8">Candidate's information</p>
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {/* First Name Field */}
              <FormField
                control={form.control}
                name="Firstname"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">First Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="First name"
                        {...field}
                        className="h-10 placeholder:text-black"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              {/* Last Name Field */}
              <FormField
                control={form.control}
                name="Lastname"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Last name"
                        {...field}
                        className="h-10 placeholder:text-black"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              {/* Date of Birth Field */}
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">
                      Date of Birth
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        className="w-full h-10"
                        placeholder="Select a date"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              {/*gender Field */}
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">Gender</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder="Select Gender
"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {gender.map((gender, index) => (
                            <SelectItem key={index} value={gender.value}>
                              {gender.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              {/*status Field */}
              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">
                      Marital status
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder="Select Marital status

"
                          />
                        </SelectTrigger>
                        <SelectContent>
                          {status.map((status, index) => (
                            <SelectItem key={index} value={status.value}>
                              {status.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              {/* Passport Number Field */}
              <FormField
                control={form.control}
                name="passportNumber"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">
                      Passport Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter Passport Number"
                        {...field}
                        className="h-10 placeholder:text-black"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              {/* Confirm Passport Number Field */}
              <FormField
                control={form.control}
                name="confirmPassport"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">
                      Confirm Passport Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Confirm Passport Number"
                        {...field}
                        className="h-10 placeholder:text-black"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              {/* Passport Issue Date Field */}
              <FormField
                control={form.control}
                name="passportIssueDate"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">
                      Passport Issue Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        className="w-full h-10"
                        placeholder="Select issue date"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              {/* Passport Issue Date Field */}
              <FormField
                control={form.control}
                name="passportexpDate"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">
                      Passport Expiry Date
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        className="w-full h-10"
                        placeholder="Select issue date"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              {/* Passport Issue place Field */}
              <FormField
                control={form.control}
                name="passportIssuePlace"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">
                      Passport Issue Place
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Passport Issue Place"
                        {...field}
                        className="h-10 placeholder:text-black"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              {/* Visa type */}
              <FormField
                control={form.control}
                name="Visatype"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">Visa Type</FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select travel Country" />
                        </SelectTrigger>
                        <SelectContent>
                          {visatype.map((visatype, index) => (
                            <SelectItem key={index} value={visatype.value}>
                              {visatype.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {/* Email */}

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className="h-10 placeholder:text-black"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
              {/* phoneNumber */}

              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">Phone №</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Number"
                        {...field}
                        className="h-10 placeholder:text-black"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {/* nationalId */}

              <FormField
                control={form.control}
                name="nationalId"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">National Id</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your National Id"
                        {...field}
                        className="h-10 placeholder:text-black"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />

              {/* position */}

              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel className="text-gray-500">
                      Position applied for
                    </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value}
                        onValueChange={(value) => field.onChange(value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="-------" />
                        </SelectTrigger>
                        <SelectContent>
                          {position.map((position, index) => (
                            <SelectItem key={index} value={position.value}>
                              {position.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-500" />
                  </FormItem>
                )}
              />
            </div>

            <div className="w-full flex justify-end">
              <Button
                type="submit"
                className="sm:px-14  px-7 py-6"
                disabled={isSubmitted}
              >
                Submit
              </Button>
              {isSubmitted && (
                <Link href={"/payment"}>
                  <Button className="ml-4 sm:px-14  px-7 py-6">Payment</Button>{" "}
               </Link>
              )}
            </div>
          </form>
          <div className=" text-end w-full mt-6 text-green-500">
            {result && <p>{result}</p>} {/* Display the result message */}
          </div>
        </Form>
      </div>
    </div>
  );
}
