import supabase from "../lib/supabase";
import { useUserStore } from "../store/useUserStore";

export default function useSupabaseAuth() {
  const { session, setSession, setUser } = useUserStore();

  async function signInWithEmail(email: string, password: string) {
    const { error, data } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return {
      error,
      data,
    };
  }

  async function signUpWithEmail(email: string, password: string) {
    console.log("here i am ");
    const { error, data } = await supabase.auth.signUp({
      email,
      password,
    });

    return {
      error,
      data,
    };
  }
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setSession(null);
      setUser(null);
    }
    return { error };
  }

  async function getUserProfile() {
    if (!session?.user) throw new Error("User is not logged in");
    const { data, error, status } = await supabase
      .from("profiles")
      .select("username , full_name, avatar_url, website ")
      .eq("id", session?.user.id)
      .single();

    return { data, error, status };
  }

  async function updateUserProfile(
    username: string,
    fullName: string,
    avatarUrl: string,
    website: string
  ) {
    if (!session?.user) throw new Error("User is not logged in");
    const updates = {
      id: session?.user.id,
      username,
      full_name: fullName,
      avatar_url: avatarUrl,
      website,
      updated_at: new Date(),
    };
    const { error } = await supabase.from("profiles").upsert(updates);

    return { error };
  }

  return {
    signInWithEmail,
    signUpWithEmail,
    signOut,
    getUserProfile,
    updateUserProfile,
  };
}

// Y.49xp@6eJ4Mr6b
