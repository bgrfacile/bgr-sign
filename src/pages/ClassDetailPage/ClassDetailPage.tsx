import React from "react";
import {ArrowLeft} from "lucide-react";
import {Link, useParams} from "react-router";
import {useFetchAttendanceInfo} from "@/hooks/useFetchAttendanceInfo.tsx";
import {StudentAttendanceList} from "@/pages/ClassDetailPage/components/StudentAttendanceList.tsx";


export const ClassDetailPage: React.FC = () => {
  const {courseId} = useParams();
  const {data, loading, error} = useFetchAttendanceInfo(Number(courseId));

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
              <ArrowLeft className="h-4 w-4 mr-2"/>
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
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-medium text-[#2C3E50] mb-4">
                  Attendance QR Code
                </h2>
                <div
                    className="aspect-square bg-white p-4 rounded-lg border-2 border-[#ECF0F1] flex items-center justify-center">
                  <img
                      src={data?.qrCode}
                      alt="Class QR Code"
                      className="w-full h-full"
                  />
                </div>
                <p className="text-sm text-[#7F8C8D] mt-4 text-center">
                  Students can scan this QR code to mark their attendance
                </p>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                <h2 className="text-lg font-medium text-[#2C3E50] mb-4">
                  Class Stats
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-[#1ABC9C]/10 text-center">
                    <div className="text-2xl font-bold text-[#1ABC9C]">
                      {data?.stats.present}
                    </div>
                    <div className="text-sm text-[#2C3E50]">Present</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#E74C3C]/10 text-center">
                    <div className="text-2xl font-bold text-[#E74C3C]">
                      {data?.stats.absent}
                    </div>
                    <div className="text-sm text-[#2C3E50]">Absent</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#F1C40F]/10 text-center">
                    <div className="text-2xl font-bold text-[#F1C40F]">
                      {data?.stats.late}
                    </div>
                    <div className="text-sm text-[#2C3E50]">Late</div>
                  </div>
                  <div className="p-4 rounded-lg bg-[#7F8C8D]/10 text-center">
                    <div className="text-2xl font-bold text-[#7F8C8D]">
                      {data?.stats.pending}
                    </div>
                    <div className="text-sm text-[#2C3E50]">Pending</div>
                  </div>
                </div>
              </div>
            </div>


            {/* Student List */}
            <div className="md:col-span-2">
              <StudentAttendanceList
                  students={data?.students || null}
                  onUpdateStatus={() => {
                  }}
                  onSendEmail={() => {
                  }}
              />
            </div>
          </div>
        </div>
      </div>
  );
};
