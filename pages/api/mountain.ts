import mountains from '../../stubs.json'

export default (req: any, res: any) => {
  if (!req.query.mountain) {
    res.statusCode = 400
    res.end("Mountain must be defined")
  } else {
    const found = mountains.filter(({ slug }) => slug === req.query.mountain)
    if (found?.length === 0) {
      res.statusCode === 404;
      res.end(`Mountain ${req.query.name} not found`)
    } else {
      res.statusCode = 200
      res.setHeader("Content-Type", "application/json")
      res.end(
        JSON.stringify(found[0])
      )
    }
  }
}