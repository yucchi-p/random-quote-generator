const fetchRandomQuote = async () => {
    const response = await fetch(
        "https://programming-quotesapi.vercel.app/api/random"
    );
    const data = await response.json();
    return data;
}

export default fetchRandomQuote;