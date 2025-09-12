import dados from "../models/dados.js";
const { barbies } = dados;

const getAllBarbies = (req, res) => {
    let resultado = barbies;
    res.status(200).json({
        total: resultado.length,
        barbies: resultado
    });
};

const getBarbieById = (req, res) => {
    let id = parseInt(req.params.id);
    const barbieId = barbies.find(b => b.id === id)
    if (barbieId) {
        res.status(200).json({
            total: barbieId.length,
            barbie: barbieId
        });
    } else {
        res.status(404).json({
            error: true,
            message: `Barbie não existente com esse id: ${id}`
        });
    };
};

const createBarbie = (req, res) => {
    const { nome, profissao, anoLancamento } = req.body;
    if(!nome){
        return res.status(400).json({
            sucess: false,
            message: "Nome da Barbie é obrigátorio para a criação"
        });
    };
    const novaBarbie = {
        id: barbies.length + 1,
        nome: nome,
        profissao: profissao || "Desempregada",
        anoLancamento: parseInt(anoLancamento) || 2025
    };
    barbies.push(novaBarbie);
    res.status(200).json({
        sucess: true,
        message: "Barbie nova no pedaço!",
        barbie: novaBarbie
    });
};

const deleteBarbie = (req, res) => {
    let id = parseInt(req.params.id);

    if(isNaN(id)){
        return res.status(400).json({
            sucess: false,
            message: `O Id deve ser válido`
        });
    };
const barbieRemover = barbies.find(b => b.id === id);
if (!barbieRemover){
    return res.status(404).json({
            sucess: false,
            message: `Barbie não existente com esse id: ${id}`
    });
};
    const barbiesFiltradas = barbies.filter(barbieId => barbieId.id !== id);
    barbies.splice(0, barbies.length, ...barbiesFiltradas);
    res.status(200).json({
        sucess: true,
        message: `A barbie com o id ${id} foi removido com sucesso`
    });
};


export { getAllBarbies, getBarbieById, createBarbie, deleteBarbie };