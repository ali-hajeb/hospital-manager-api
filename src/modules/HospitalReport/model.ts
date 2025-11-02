import { model, Schema } from "mongoose";
import type IHospitalReport from "./types";

const HospitalReportSchema = new Schema<IHospitalReport>({
    fiscalYear: {
        type: String,
        trim: true,
    },
    hospital: {
        type: String,
        trim: true,
    },
    date: {
        type: String,
        default: new Date().toLocaleDateString('fa-IR'), 
    },

    // اطلاعات درمانی
    medical: {
        approvedBeds:   { type: Number, default: 0 },
        activeBeds:     { type: Number, default: 0 },
        occupancyRate:  { type: Number, default: 0 },
        outpatients:    { type: Number, default: 0 },
        inpatients:     { type: Number, default: 0 },
        total:          { type: Number, default: 0 },
    },

    // هزینه‌های سربار
    overhead: {
        drugCost:          { type: Number, default: 0 },
        medicalSupplies:   { type: Number, default: 0 },
        vehicleCost:       { type: Number, default: 0 },
        contractForces:    { type: Number, default: 0 },
        foodCost:          { type: Number, default: 0 },
        facilitiesSupport: { type: Number, default: 0 },
        itSupport:         { type: Number, default: 0 },
        overheadKaraneh:   { type: Number, default: 0 },
        officeRepairs:     { type: Number, default: 0 },
        transportation:    { type: Number, default: 0 },
        otherOverhead:     { type: Number, default: 0 },
        total:             { type: Number, default: 0 },
    },

    // هزینه‌های پرسنلی
    personnel: {
        treasurySalary:   { type: Number, default: 0 },
        hourlyDoctors:    { type: Number, default: 0 },
        doctorKaraneh:    { type: Number, default: 0 },
        staffKaraneh:     { type: Number, default: 0 },
        nurseKaraneh:     { type: Number, default: 0 },
        overtime:         { type: Number, default: 0 },
        salaryAdjustment: { type: Number, default: 0 },
        technicalFee:     { type: Number, default: 0 },
        welfare:          { type: Number, default: 0 },
        insurance:        { type: Number, default: 0 },
        otherPersonnel:   { type: Number, default: 0 },
        total:            { type: Number, default: 0 },
    },

    // درآمدها
    revenue: {
        treatmentRevenue: { type: Number, default: 0 },
        drugRevenue:      { type: Number, default: 0 },
        rentRevenue:      { type: Number, default: 0 },
        wasteRevenue:     { type: Number, default: 0 },
        otherRevenue:     { type: Number, default: 0 },
        total:            { type: Number, default: 0 },
    },

}, {
  timestamps: true, 
});

const HospitalReport = model('HospitalReports', HospitalReportSchema);
export default HospitalReport;
