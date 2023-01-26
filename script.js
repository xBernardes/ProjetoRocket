const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)

const data = {
    run:        ['1-0', '01-02', '01-06','01-08','01-09'],
    water:      ['1-0', '01-03', '01-06'],
    food:       ['1-0', '01-02', '01-06'],
    journal:    ['1-0', '01-02', '01-06'],
    takePills:  ['1-0', '01-02', '01-06'],
}

nlwSetup.setData(data);
nlwSetup.load()