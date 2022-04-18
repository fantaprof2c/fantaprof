const json_file = './asta.json';

async function get_json() {
    const response = await fetch(json_file);
    const data = await response.json();
    return data;
}

async function post_json() {
    const response = await fetch(json_file, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": "John",
            "age": 30
        })
    });
    const data = await response.json();
    return data;
}

po