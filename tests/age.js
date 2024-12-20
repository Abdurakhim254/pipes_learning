const year=2024



export function getageByyear(age){
    try {
        if(age<year){
            return year-age
        }else{
            return "Yilni xisoblashda xatolik"
        }
    } catch (error) {
        console.error(error.message)
    }
}