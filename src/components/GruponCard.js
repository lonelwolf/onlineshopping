import Card from "./Card"

const GrupoCard = () => {
    return (
            <div className="my-5 flex flex-col justify-center items-center mx-2 bg-[#196071]  mt-24">
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                    <Card photo='https://picsum.photos/800/600' />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                    <Card photo='https://picsum.photos/800/600' />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                    <Card photo='https://picsum.photos/800/600' />
                </div>
            </div>
            )
        }
        export default GrupoCard
