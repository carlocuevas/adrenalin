import mountains from '../../stubs.json'

export default (req: any, res: any) => {
  const filter = req.query.mountains ? new RegExp(req.query.mountains, "i") : /.*/
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.end(
    JSON.stringify(
      mountains.filter((item: { title: string }) => item.title.match(filter))
    )
  )
}