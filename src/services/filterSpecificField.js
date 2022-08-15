

/**
 *  funcao recebe dado a ser filtrado, e retorna todos os valores encontrado no referido campo
 * @param  Data  dado a ser filtrado
 * @param  fieldsForFilter campo a ser filtrado
 * @return array contendo o campo solicitado e respectivos valores encontrados em todos objetos
 */
module.exports = function filterSpecificField(Data, fieldsForFilter) {


    if (fieldsForFilter != undefined || null) {
        const values = Data.map((movie) => {
            return movie[fieldsForFilter];

        })

        return values;
    }

    return Data;



}