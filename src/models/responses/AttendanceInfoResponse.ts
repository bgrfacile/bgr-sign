import {Student} from "@/types";
import {statsT} from "@/models/types/statsT.ts";
import {CourseInfoT} from "@/models/types/courseInfoT.ts";

export type AttendanceInfoResponse = {
    qrCode: string;
    scanUrl: string;
    students: Student[];
    stats: statsT;
    courseInfo:CourseInfoT;
}