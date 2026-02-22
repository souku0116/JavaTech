import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { CheckCircle, AlertCircle, Loader2, UploadCloud, ShieldCheck, Lock } from "lucide-react";
const LOCAL_STORAGE_KEY = "internship_applications";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  campaignId: string;
  courseTrack: string;
  qualification: string;
  resumeLink: string;
  statement: string;
};

type ApplicationRecord = FormData & {
  id: string;
  submittedAt: string;
  status: "pending";
};

const saveApplicationLocally = (application: ApplicationRecord) => {
  if (typeof window === "undefined") return;
  const existing = localStorage.getItem(LOCAL_STORAGE_KEY);
  const parsed = existing ? (JSON.parse(existing) as ApplicationRecord[]) : [];
  parsed.push(application);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsed));
};

export default function InternshipRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // Store locally so the page runs without a backend
      const id = crypto.randomUUID();
      const application: ApplicationRecord = {
        id,
        ...data,
        submittedAt: new Date().toISOString(),
        status: "pending",
      };

      saveApplicationLocally(application);

      // Simulate a small delay for better UX
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="h-10 w-10 text-green-600" />
          </motion.div>
          <h2 className="text-3xl font-bold text-slate-900 mb-2">Registration Successful!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for registering for the Internship Batch. We have received your details and
            will contact you shortly with the next steps.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-8 text-left">
            <h4 className="font-semibold text-blue-900 mb-2 text-sm uppercase tracking-wide">
              Next Steps:
            </h4>
            <ul className="text-sm text-blue-800 space-y-2 list-disc list-inside">
              <li>Check your email for confirmation.</li>
              <li>Join our discord community (link in email).</li>
              <li>Prepare for the orientation session.</li>
            </ul>
          </div>
          <button
            onClick={() => setIsSuccess(false)} // Reset for demo purposes
            className="w-full inline-flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Limited Seats Available
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Internship Batch Registration
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Secure your spot in our upcoming rigorous training program. Designed for
            campaign-selected students.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sidebar / Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-blue-600" />
                Why Register?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-50 p-1.5 rounded-md mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-sm text-slate-600">
                    Access to premium Live Projects and mentorship.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-50 p-1.5 rounded-md mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-sm text-slate-600">
                    Official Internship Certificate upon completion.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-50 p-1.5 rounded-md mt-0.5">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-sm text-slate-600">
                    Priority placement support with hiring partners.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 rounded-xl shadow-sm p-6 text-white">
              <h3 className="text-lg font-bold mb-2">Need Help?</h3>
              <p className="text-slate-300 text-sm mb-4">
                If you are facing issues with your Campaign ID or registration, please contact
                support.
              </p>
              <a
                href="mailto:support@javatech.edu"
                className="text-blue-400 text-sm font-medium hover:text-blue-300"
              >
                support@javatech.edu &rarr;
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                <h3 className="text-lg font-medium text-slate-900">Applicant Details</h3>
                <div className="flex items-center text-xs text-slate-500 gap-1">
                  <Lock className="h-3 w-3" />
                  Secure Application
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">Full Name</label>
                    <input
                      {...register("fullName", { required: "Full name is required" })}
                      type="text"
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="John Doe"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Email Address
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
                      })}
                      type="email"
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                    <input
                      {...register("phone", { required: "Phone number is required" })}
                      type="tel"
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  {/* Campaign ID */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Campaign / Selection ID
                    </label>
                    <input
                      {...register("campaignId", { required: "Campaign ID is required" })}
                      type="text"
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="CMP-2024-XXXX"
                    />
                    <p className="text-xs text-slate-500">Provided in your selection email.</p>
                    {errors.campaignId && (
                      <p className="text-red-500 text-xs mt-1">{errors.campaignId.message}</p>
                    )}
                  </div>
                </div>

                {/* College */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">
                    College / Institution Name
                  </label>
                  <input
                    {...register("college", { required: "College name is required" })}
                    type="text"
                    className="block w-full px-4 py-3 rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    placeholder="University of Technology..."
                  />
                  {errors.college && (
                    <p className="text-red-500 text-xs mt-1">{errors.college.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Track */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">Course Track</label>
                    <select
                      {...register("courseTrack", { required: "Please select a track" })}
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none"
                    >
                      <option value="">Select a track...</option>
                      <option value="core-java">Core Java</option>
                      <option value="advanced-java">Advanced Java (Spring/Hibernate)</option>
                      <option value="full-stack">Full Stack Java</option>
                    </select>
                    {errors.courseTrack && (
                      <p className="text-red-500 text-xs mt-1">{errors.courseTrack.message}</p>
                    )}
                  </div>

                  {/* Qualification */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Current Qualification
                    </label>
                    <select
                      {...register("qualification", { required: "Please select qualification" })}
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none appearance-none"
                    >
                      <option value="">Select qualification...</option>
                      <option value="undergrad">Undergraduate Student</option>
                      <option value="graduate">Graduate (B.Tech/B.E/BCA/etc)</option>
                      <option value="postgrad">Postgraduate</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.qualification && (
                      <p className="text-red-500 text-xs mt-1">{errors.qualification.message}</p>
                    )}
                  </div>
                </div>

                {/* Resume Link */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Resume Link (Google Drive / LinkedIn)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UploadCloud className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      {...register("resumeLink", { required: "Resume link is required" })}
                      type="url"
                      className="block w-full pl-10 px-4 py-3 rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                      placeholder="https://..."
                    />
                  </div>
                  <p className="text-xs text-slate-500">Please ensure the link is accessible.</p>
                  {errors.resumeLink && (
                    <p className="text-red-500 text-xs mt-1">{errors.resumeLink.message}</p>
                  )}
                </div>

                {/* Statement */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700">
                    Short Statement of Interest
                  </label>
                  <textarea
                    {...register("statement", { required: "Please tell us why you want to join" })}
                    rows={4}
                    className="block w-full px-4 py-3 rounded-lg border-gray-300 bg-gray-50 border focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                    placeholder="Why do you want to join this internship?"
                  ></textarea>
                  {errors.statement && (
                    <p className="text-red-500 text-xs mt-1">{errors.statement.message}</p>
                  )}
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg flex items-center gap-2 text-sm">
                    <AlertCircle className="h-5 w-5" />
                    {error}
                  </div>
                )}

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center px-6 py-4 border border-transparent text-lg font-semibold rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all shadow-lg hover:shadow-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                        Submitting Application...
                      </>
                    ) : (
                      "Register for Internship Batch"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
