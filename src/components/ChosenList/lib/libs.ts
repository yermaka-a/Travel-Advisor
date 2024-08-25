import xlsx, { IJsonSheet, ISettings } from "json-as-xlsx"
import { IContentExtended } from "../types"
import { validateData } from "../lib/utils"
export const transformDataToXLSX = <T>(chosenPlaces: T[]) => {
    const data: IJsonSheet[] = [
        {
            sheet: "Информация",
            columns: [
                { label: "Автор", value: () => "@yermaka" },
                { label: "Название", value: (row) => validateData(row?.name) },
                {
                    label: "Адрес",
                    value: (row) => {
                        const address = validateData(row?.address as IContentExtended)
                        if (address !== "Неизвестно") {
                            let addressString = ""
                            for (const key in address) {
                                if (address[key]) addressString += address[key] + " "
                            }
                            return addressString
                        }
                        return address
                    }
                },
                { label: "Описание", value: (row) => validateData(row?.description) },
                { label: "Ссылка на изображение", value: (row) => validateData(row?.image) },
                { label: "Рейтинг известности", value: (row) => validateData(parseInt(row?.rate as string)) },
                {
                    label: "Координаты",
                    value: (row) => {
                        const point = validateData(row?.point)
                        if (point !== "Неизвестно") {
                            return Number((point as IContentExtended)?.lat).toFixed(4) + ", " + Number((point as IContentExtended)?.lon).toFixed(4)
                        }
                        return point
                    }
                },
                { label: "Сайт", value: (row) => validateData(row?.url) },
                { label: "WikiVoyage", value: (row) => validateData(row?.voyage) },
                { label: "Wikipedia", value: (row) => validateData(row?.wikipeida) },
                { label: "Описание с Wikipedia", value: (row) => validateData((row?.wikipedia_extracts as IContentExtended)?.text) }
            ],
            content: chosenPlaces as unknown as IContentExtended[]
        }
    ]
    const settings = {
        fileName: "Избранные места@yermaka",
        extraLength: 5,
        writeOptions: { bookType: "xlsx", type: "array" }
    } as ISettings
    xlsx(data, settings)
}
