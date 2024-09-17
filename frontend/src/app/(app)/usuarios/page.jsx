import CardUser from "@/components/CardUser";

const Usuarios = () => {
    const users = [
        { 
            id: 1, 
            name: 'Tania Andrew', 
            role: 'Designer @ Google', 
            image: 'link_da_imagem1', 
            review: 'I found solution to all my design needs from Creative Tim.' 
        },
        { 
            id: 2, 
            name: 'John Doe', 
            role: 'Engineer @ Microsoft', 
            image: 'link_da_imagem2', 
            review: 'Great service and support from the team.' 
        },
        { 
            id: 3, 
            name: 'Sophia Williams', 
            role: 'Product Manager @ Apple', 
            image: 'link_da_imagem3', 
            review: 'The tools and resources provided here have transformed the way I manage product development. From design to testing, everything is now so much smoother.' 
        },
        { 
            id: 4, 
            name: 'Michael Brown', 
            role: 'Data Scientist @ Amazon', 
            image: 'link_da_imagem4', 
            review: 'I have been able to streamline my data processing workflow significantly with the help of Creative Tim.' 
        },
        { 
            id: 5, 
            name: 'Emily Davis', 
            role: 'Frontend Developer @ Netflix', 
            image: 'link_da_imagem5', 
            review: 'The components here are easy to integrate and offer a great deal of customization, making development faster and more enjoyable.' 
        },
        { 
            id: 6, 
            name: 'Liam Johnson', 
            role: 'CTO @ Facebook', 
            image: 'link_da_imagem6', 
            review: 'After using the services here, we saw a significant improvement in our team’s productivity and the quality of our final products. Highly recommend for any growing tech company!' 
        },
        { 
            id: 7, 
            name: 'Olivia Martinez', 
            role: 'Marketing Manager @ Spotify', 
            image: 'link_da_imagem7', 
            review: 'The marketing tools and templates available have allowed us to scale our campaigns efficiently while maintaining quality.' 
        },
        { 
            id: 8, 
            name: 'James Lee', 
            role: 'UI/UX Designer @ Adobe', 
            image: 'link_da_imagem8', 
            review: 'As a designer, the layouts and UI components have given me so much creative freedom and saved countless hours of manual work.' 
        },
    ];

    return (
        <main className="container mx-auto py-6">
            <section className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-2">
                {users.map(user => (
                    <CardUser key={user.id} name={user.name} role={user.role} image={user.image} review={user.review} />
                ))}
            </section>
        </main>
    );
};

export default Usuarios;