import {pool} from "../db.js"

export const ping = async (req, res) => {
    cons [result] = await pool.query("select 1 + 1 as result")
    res.json(result[0])
}