import React from 'react';
import { BarChart2, PieChart, TrendingUp, Download, Calendar, Filter } from 'lucide-react';
import {Button} from "@/components/ui/Button.tsx";

export const ReportsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#F8FAFC] pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-[#2C3E50] mb-4">Reports & Analytics</h1>

                    {/* Report Types */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-medium text-[#2C3E50]">Attendance Summary</h3>
                                <BarChart2 className="h-5 w-5 text-[#1ABC9C]" />
                            </div>
                            <p className="text-sm text-[#7F8C8D] mb-4">
                                Overview of attendance patterns and trends across all classes
                            </p>
                            <Button className="w-full">Generate Report</Button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-medium text-[#2C3E50]">Class Performance</h3>
                                <PieChart className="h-5 w-5 text-[#1ABC9C]" />
                            </div>
                            <p className="text-sm text-[#7F8C8D] mb-4">
                                Detailed analysis of attendance rates by class and subject
                            </p>
                            <Button className="w-full">Generate Report</Button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-medium text-[#2C3E50]">Absence Analysis</h3>
                                <TrendingUp className="h-5 w-5 text-[#1ABC9C]" />
                            </div>
                            <p className="text-sm text-[#7F8C8D] mb-4">
                                Breakdown of absences, patterns, and justification statistics
                            </p>
                            <Button className="w-full">Generate Report</Button>
                        </div>
                    </div>

                    {/* Recent Reports */}
                    <div className="bg-white rounded-lg shadow-sm">
                        <div className="p-6 border-b border-[#ECF0F1]">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-[#2C3E50]">Recent Reports</h2>
                                <div className="flex gap-2">
                                    <Button variant="secondary" className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        Date Range
                                    </Button>
                                    <Button variant="secondary" className="flex items-center gap-2">
                                        <Filter className="h-4 w-4" />
                                        Filter
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="p-6">
                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'Monthly Attendance Summary',
                                        date: 'March 2024',
                                        type: 'Attendance Report',
                                        status: 'Ready'
                                    },
                                    {
                                        title: 'Class Performance Analysis',
                                        date: 'February 2024',
                                        type: 'Performance Report',
                                        status: 'Ready'
                                    },
                                    {
                                        title: 'Absence Patterns Report',
                                        date: 'January 2024',
                                        type: 'Analysis Report',
                                        status: 'Ready'
                                    }
                                ].map((report, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between p-4 bg-[#F8FAFC] rounded-lg"
                                    >
                                        <div>
                                            <h3 className="font-medium text-[#2C3E50]">{report.title}</h3>
                                            <p className="text-sm text-[#7F8C8D]">
                                                {report.type} • {report.date}
                                            </p>
                                        </div>
                                        <Button
                                            variant="secondary"
                                            className="flex items-center gap-2"
                                            size="sm"
                                        >
                                            <Download className="h-4 w-4" />
                                            Download
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};