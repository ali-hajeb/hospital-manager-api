import * as hospitalReportActions from './controllers';
import hospitalReportRouter from './routes';
import HospitalReportModel from './model';
import type IHospitalReport from './types';
import type { INewHospitalReport } from './types';

export {
    hospitalReportActions,
    hospitalReportRouter,
    HospitalReportModel,
    IHospitalReport,
    INewHospitalReport
}
