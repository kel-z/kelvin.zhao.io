"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { X } from "lucide-react";
import { LoadingSpinner } from "../LoadingSpinner";
import { useState } from "react";
import { CourseForm, TrackingResponse } from "@/lib/types";
import { courses } from "@/lib/courses";
import { createTracking } from "@/lib/letmeinubc";

type TrackingFormProps = {
  disabled?: boolean;
  setShowAddCourse?: (show: boolean) => void;
};
export default function TrackingForm({
  disabled = false,
  setShowAddCourse
}: TrackingFormProps) {
  const [loading, setLoading] = useState(false);

  const formSchema = z.object({
    email: z.string().email({ message: "Invalid email" }),
    session: z.string().min(1, { message: "Session is required" }),
    department: z.string().min(1, { message: "Department is required" }),
    number: z.string().min(1, { message: "Course number is required" }),
    section: z.string().min(1, { message: "Section is required" }),
    restricted: z.boolean()
  });

  const form = useForm<CourseForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      session: "",
      department: "",
      number: "",
      section: "",
      restricted: false
    }
  });

  const addCourse = async (data: CourseForm) => {
    const key =
      `${data.session} 2024 ${data.department} ${data.number} ${data.section}`.toUpperCase();

    if (!courses.has(key)) {
      alert(`${key} is not a valid course.`);
      return;
    }

    const response = await createTracking(key, data.email, data.restricted);

    if (response.statusCode === 400) {
      alert("Course does not exist in the LetMeInUBC database.");
      return;
    }

    if (response.statusCode !== 200) {
      alert("Failed to add course.");
      return;
    }

    alert(
      `Success! Tracking ${key} using ${
        data.restricted ? "restricted and general" : "only general"
      } seats for ${data.email}.`
    );
  };

  const onSubmit = async (data: CourseForm) => {
    if (!addCourse) return;
    setLoading(true);
    addCourse(data).then(() => {
      setLoading(false);
    });
  };

  return (
    <Card className="w-full min-w-[300px] max-w-md">
      <CardHeader className="px-6 pb-3 pt-6">
        <div className="flex flex-row items-center justify-between">
          <CardTitle>Create Tracking</CardTitle>
          {setShowAddCourse && (
            <X
              className="cursor-pointer"
              onClick={() => setShowAddCourse(false)}
            />
          )}
        </div>
        <CardDescription>Fill in the course information</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex w-full flex-col gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="example@email.com"
                        {...field}
                        disabled={disabled}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex w-full flex-row justify-between gap-1">
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem className="w-3/4">
                      <FormLabel htmlFor="dept">Department</FormLabel>
                      <FormControl>
                        <Input
                          id="dept"
                          placeholder="ASIA"
                          {...field}
                          className="uppercase"
                          disabled={disabled}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="number">Number</FormLabel>
                      <FormControl>
                        <Input
                          id="number"
                          placeholder="320"
                          {...field}
                          className="uppercase"
                          disabled={disabled}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="section"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel htmlFor="section">Section</FormLabel>
                      <FormControl>
                        <Input
                          id="section"
                          placeholder="092"
                          {...field}
                          className="uppercase"
                          disabled={disabled}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="session"
                render={({ field }) => (
                  <div className="flex flex-col space-y-1.5">
                    <FormLabel htmlFor="session">Session</FormLabel>
                    <FormItem>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger id="session" disabled={disabled}>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent position="popper" {...field}>
                          <SelectItem value="W">Winter</SelectItem>
                          <SelectItem value="S">Summer</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <FormField
                control={form.control}
                name="restricted"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-1">
                      <FormControl>
                        <Checkbox
                          id="restricted"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          disabled={disabled}
                        />
                      </FormControl>
                      <FormLabel htmlFor="restricted" className="mt-1">
                        Include restricted seats
                      </FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <Button
                className="w-full"
                type="submit"
                disabled={disabled || loading}
              >
                {loading ? <LoadingSpinner /> : "Submit"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
