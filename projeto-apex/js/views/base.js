export const elements = {
    create: document.querySelector(".create"),
    i_name: document.querySelector("#i-name"),
    i_user: document.querySelector("#i-user"),
    i_cpu: document.querySelector("#i-cpu"),
    i_ram: document.querySelector("#i-ram"),
    i_storage: document.querySelector("#i-storage"),
    machines: document.querySelector(".machine-list"),
};

export const clearUI = () => {
    elements.create.innerHTML = "";
}
