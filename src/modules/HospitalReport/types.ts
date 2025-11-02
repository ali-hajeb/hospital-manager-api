export interface INewHospitalReport {
    fiscalYear: string;
    hospital: string;
    date: string;

    medical: {
        approvedBeds: number;
        activeBeds: number;
        occupancyRate: number;
        outpatients: number;
        inpatients: number;
    };

    overhead: {
        drugCost: number;
        medicalSupplies: number;
        vehicleCost: number;
        contractForces: number;
        foodCost: number;
        facilitiesSupport: number;
        itSupport: number;
        overheadKaraneh: number;
        officeRepairs: number;
        transportation: number;
        otherOverhead: number;
        total: number;
    };

    personnel: {
        treasurySalary: number;
        hourlyDoctors: number;
        doctorKaraneh: number;
        staffKaraneh: number;
        nurseKaraneh: number;
        overtime: number;
        salaryAdjustment: number;
        technicalFee: number;
        welfare: number;
        insurance: number;
        otherPersonnel: number;
        total: number;
    };

    revenue: {
        treatmentRevenue: number;
        drugRevenue: number;
        rentRevenue: number;
        wasteRevenue: number;
        otherRevenue: number;
        total: number;
    };

}

export default interface IHospitalReport extends INewHospitalReport {
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
