export default function Docs({params}:{params:{slug:string[]}}) {
    if(params.slug?.length === 2){
        return <div>
            выведен проект {params.slug[0]} который так же содержит подпроект {params.slug[1]}
        </div>
    }else if(params.slug?.length === 1){
        return <div>
            выведен проект {params.slug[0]} 
        </div>
    }
    return <div>Документация</div>
}