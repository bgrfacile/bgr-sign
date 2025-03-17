import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router";
import { useFetchAttendanceInfo } from "@/hooks/useFetchAttendanceInfo.tsx";
import { StudentAttendanceList } from "@/pages/ClassDetailPage/components/StudentAttendanceList.tsx";
import { AttendanceQRCode } from "@/pages/ClassDetailPage/components/AttendanceQRCode";
import { ClassStats } from "@/pages/ClassDetailPage/components/ClassStats";

export const ClassDetailPage: React.FC = () => {
  const { courseId } = useParams();
  const { data, loading, error } = useFetchAttendanceInfo(Number(courseId));

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
      <div className="min-h-screen bg-[#F8FAFC] pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <Link
                to="/dashboard"
                className="inline-flex items-center text-[#7F8C8D] hover:text-[#2C3E50] mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Link>

            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-[#2C3E50]">
                  {data?.courseInfo.courseName}
                </h1>
                <p className="text-[#7F8C8D] mt-1">
                  {data?.courseInfo.classRoom} • {data?.courseInfo.classTime}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* QR Code Section */}
            <div className="md:col-span-1">
              <AttendanceQRCode qrCodeUrl={data?.qrCode || ""} />

              {/* Quick Stats */}
              {data?.stats && <ClassStats stats={data.stats} />}
            </div>

            {/* Student List */}
            <div className="md:col-span-2">
              <StudentAttendanceList students={data?.students} />
            </div>
          </div>
        </div>
      </div>
  );
};
