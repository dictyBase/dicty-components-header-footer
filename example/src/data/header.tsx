import AddIcon from "@material-ui/icons/Add"
import FileDownloadIcon from "@material-ui/icons/GetApp"
import InfoIcon from "@material-ui/icons/Info"
import LoginIcon from "../LoginIcon"

const headerData = [
  {
    url: "/cite",
    icon: <AddIcon fontSize="large" />,
    text: "Cite Us",
  },
  {
    url: "/downloads",
    icon: <FileDownloadIcon fontSize="large" />,
    text: "Downloads",
  },
  {
    url: "/info",
    icon: <InfoIcon fontSize="large" />,
    text: "About dictyBase",
  },
  {
    url: "/login",
    icon: <LoginIcon fontSize="large" />,
    text: "Login",
  },
]

export default headerData
