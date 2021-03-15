import { Snackbar } from "@material-ui/core"
import { Alert } from "@material-ui/lab"

function MuiAlert(props) {
  return <Alert elevation={6} variant="filled" {...props} />;
}

export default function SnackBar(props) {

  return (
    <Snackbar open={props.open} autoHideDuration={6000}>
      <MuiAlert severity={props.variant}>
        {props.msg}
      </MuiAlert>
    </Snackbar>
  )
}