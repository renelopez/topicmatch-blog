import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

const styles = theme => ({
  BlogItemParent: {
    minWidth: "40%",
    height: 150,
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    width: 200,
  },
  cover: {
    width: 201,
  },
})

function BlogItem(props) {
  const { classes, theme, post, slug } = props

  console.log(props)

  return (
    <div className={classes.BlogItemParent}>
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Link to={slug}>
              <Typography component="h5" variant="h5">
                {post.title}
              </Typography>
            </Link>
            <Typography variant="subtitle1" color="textSecondary">
              {post.date}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.cover}
          image={props.image}
          title="Really this is Gatsby???"
        />
      </Card>
    </div>
  )
}

export default withStyles(styles)(BlogItem)
