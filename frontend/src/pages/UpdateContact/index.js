async function handleUpdateContact(id) {

    const data = {
        user_name,
        email,
        password,
        phone,
    };

    try {
        await api.post(`contacts/${id}`, data, {
            headers: {
                Authorization: userId,
            }
        });

        setContacts(contacts.filter(contact => contact.id !== id));
    } catch (error) {
        alert('Erro ao deletar contato.')
    }
}