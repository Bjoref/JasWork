import { UiButtonAppearance, UiButtonTypes } from "../ui/ui-button/ui-button-states.enum"

export interface UiButton {
    type: UiButtonTypes
    text: string
    appearance?: UiButtonAppearance
    link?: string
}