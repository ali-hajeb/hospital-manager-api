import { Request, Response } from "express";
import type { INewHospitalReport } from "./types";
import type IHospitalReport from "./types";
import HospitalReport from "./model";

export async function createReport(req: Request, res: Response) {
    try {
        console.log("Create", req.body)
        const data = req.body as INewHospitalReport;
        const report = await HospitalReport.create({...data});
        res.status(200).json({ report });
    } catch (error) {
        res.status(400).json({ error });
    }
}

export async function getReports(req: Request, res: Response) {
    try {
        const reports = await HospitalReport.find();
        res.status(200).json({ reports });
    } catch (error) {
        res.status(400).json({ error });
    }
}
export async function updateReport(req: Request, res: Response) {
    try {
        console.log("Update", req.body)
        const {_id, ...data} = req.body as IHospitalReport;
        const report = await HospitalReport.findByIdAndUpdate(_id, {...data}, { new: true });
        res.status(200).json({ report });
    } catch (error) {
        res.status(400).json({ error });
    }
}
export async function deleteReport(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const report = await HospitalReport.findByIdAndDelete(id);
        res.status(200).json({ report });
    } catch (error) {
        res.status(400).json({ error });
    }
}
export async function deleteAllReports(req: Request, res: Response) {
    try {
        const report = await HospitalReport.deleteMany();
        res.status(200).json({ report });
    } catch (error) {
        res.status(400).json({ error });
    }
}
