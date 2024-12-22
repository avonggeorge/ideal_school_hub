const Pagination = () => {
    return (
        <div className="p-4 flex items-center justify-between text-gray-500">
            <button disabled className="py-2 px-4 rounded-md bg-slate-200 font-semibld disabled:opacity-50 disabled:cursor">prev</button>
                <div className="flex gap-2 item-center text-small">
                    <button className="px-2 rounded-sm bg-green">1</button>
                    <button className="px-2 rounded-sm">2</button>
                    <button className="px-2 rounded-sm">3</button>
                    <button className="px-2 rounded-sm">4</button>
                    ...
                    <button className="px-2 rounded-sm">10</button>
                </div>
            <button className="py-2 px-4 rounded-md bg-slate-200 font-semibld disabled:opacity-50 disabled:cursor">Next</button>
        </div>
    )
}

export default Pagination;