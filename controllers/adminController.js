import {response} from "express";
import {pool} from "../models/db.js";

export const renderData = async (req, res) => {
    res.render("index", {car_data: "Hello world....."});
}