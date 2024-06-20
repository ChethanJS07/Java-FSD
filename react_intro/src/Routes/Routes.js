import Condition from '../Views/Condition';
import { MyForm } from '../Views/MyForm'
import { NewStyles } from '../Views/NewStyles';
import { Effect } from '../Views/Effect';
import { App } from '../Views/App'
import { Sample } from '../Views/Sample';

const MyURLs = [
    {
        path: "condition",
        view: Condition
    },
    {
        path: "form",
        view: MyForm
    },
    {
        path: "style",
        view: NewStyles
    },
    {
        path: "effect",
        view: Effect
    },
    {
        path: "/",
        view: App
    },
    {
        path: "sample",
        view: Sample
    }

]

export default MyURLs;