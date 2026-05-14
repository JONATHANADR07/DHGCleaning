export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-[6%] flex justify-between gap-4 flex-wrap text-sm">
      <span>Montreal, Canada</span>
      <span>
        <a href="tel:4382207424" className="font-bold hover:text-accent transition-colors">438-220-7424</a>
        {" | "}
        <a href="mailto:jordan.jdjdj@gmail.com" className="font-bold hover:text-accent transition-colors">jordan.jdjdj@gmail.com</a>
      </span>
    </div>
  )
}
