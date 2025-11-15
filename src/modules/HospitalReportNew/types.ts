export interface INewHospitalReport {
  config: {
    year: string;
    hospital: string;
    city: string;
    manager: string;
    phone: string;
    description?: string;
    timestamp?: string;
    version?: string;
  };
  treatment: {
    approvedBeds: number;
    activeBeds: number;
    occupancy: number;
    outpatients: number;
    inpatients: number;
    emergency: number;
    specialistVisits: number;
    surgeries: number;
    patientGrowth: number;
    utilization: number;
    totalPatients: number;
    avgStay: number;
    bedTurnover: number;
    efficiencyScore: number;
    revenuePerBed: number;
  };
  overhead: {
    drug: number;
    medical: number;
    vehicle: number;
    contractor: number;
    food: number;
    maintenance: number;
    it: number;
    other: number;
    total: number;
    inflationRate: number;
    drugPercent: number;
    monthly: number;
    largestCost: string;
    costPerPatient: number;
    efficiencyRatio: number;
  };
  personnel: {
    treasury: number;
    hourlyDoctors: number;
    doctorPerf: number;
    nursePerf: number;
    staffPerf: number;
    overtime: number;
    insurance: number;
    benefits: number;
    totalStaff: number;
    total: number;
    doctorShare: number;
    avgSalary: number;
    laborCostRatio: number;
    costPerEmployee: number;
  };
  revenue: {
    treatment: number;
    pharmacy: number;
    rental: number;
    waste: number;
    other: number;
    insuranceFee: number;
    total: number;
    growthRate: number;
    treatmentShare: number;
    monthly: number;
    revenuePerPatient: number;
    diversityScore: number;
  };
  profit: {
    revenue: number;
    overhead: number;
    personnel: number;
    totalCost: number;
    operatingProfit: number;
    depreciation: number;
    taxes: number;
    nonOperational: number;
    netProfit: number;
    margin: number;
    roi: number;
    currentRatio: number;
    debtRatio: number;
  };
  analytics: {
    targetProfit: number;
    targetGrowth: number;
    debtRatio: number;
    forecastPeriod: number;
    gapAnalysis: number;
    requiredRevenue: number;
    requiredCostCut: number;
    breakEvenPoint: number;
    financialHealth: number;
    riskLevel: string;
  };
  reports: {
    date: string;
    hospital: string;
    patients: number;
    beds: number;
    personnelCost: number;
    overheadCost: number;
    treatmentRevenue: number;
    pharmacyRevenue: number;
    profit: number;
    margin: number;
    efficiency: number;
    risk: string;
  }[];
  records: number;
  lastUpdate: string;
  system: {
    version: string;
    loadTime: number;
    screenWidth: number;
    device: string;
    browser: string;
  };
}
export default interface IHospitalReport extends INewHospitalReport {
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

