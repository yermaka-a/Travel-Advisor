import { PlacesStore } from "../../states/types"

export type ListProps = Omit<PlacesStore, "setBounds" | "bounds">
